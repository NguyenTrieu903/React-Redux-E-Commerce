import R from 'ramda'
import {
  getPhonesById,
  getPhones,
  getRenderedPhonesLength,
  getTotalBasketPrice,
  getTotalBasketCount,
  getCategories,
  getActiveCategoryId,
  getBasketPhonesWithCount
} from '../../selectors/Phones'

describe('Selectors', () => {
  const state = {
    phone: {
      '1': {
        id: '1',
        categoryId: '1',
        name: 'Apple iPhone 5c',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 823,
        image: '/uploads/iphone5c-selection-hero-2013.png',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      },
      '2': {
        id: '2',
        categoryId: '1',
        name: 'Apple iPhone 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 953,
        image: '/uploads/51u6y9Rm8QL._SY300_.jpg',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      },
      '3': {
        id: '3',
        categoryId: '4',
        name: 'Lenovo A6000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 764,
        image: '/uploads/lenovo-a6000-4g-smartphone-original-imadq5p9gpzzhpks.jpeg',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      }
    },
    PhonesPage: {
      ids: ['1', '2', '3'],
      search: ''
    },
    Basket: ['1', '2', '2'],
    Categories: {
      '1': {
        id: '1',
        name: 'Apple'
      },
      '2': {
        id: '2',
        name: 'Samsung'
      }
    }
  }

  it('Should return a phone by id', () => {
    const expectedPhone = {
      id: '1',
      categoryId: '1',
      name: 'Apple iPhone 5c',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
      price: 823,
      image: '/uploads/iphone5c-selection-hero-2013.png',
      cpu: '1.3GHz Apple A6',
      camera: '8mp (3264x2448)',
      size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
      weight: '132 grams (4.7 ounces) with battery',
      display: '4.0 326 pixel density',
      battery: '1480 mAh',
      memory: '16GB, 32GB and RAM 1 GB'
    }
    expect(getPhonesById(state, '1')).toEqual(expectedPhone)
  })

  it('Should return a list of phones', () => {
    const expectedPhones = [
      {
        id: '1',
        categoryId: '1',
        name: 'Apple iPhone 5c',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 823,
        image: '/uploads/iphone5c-selection-hero-2013.png',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      },
      {
        id: '2',
        categoryId: '1',
        name: 'Apple iPhone 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 953,
        image: '/uploads/51u6y9Rm8QL._SY300_.jpg',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      },
      {
        id: '3',
        categoryId: '4',
        name: 'Lenovo A6000',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 764,
        image: '/uploads/lenovo-a6000-4g-smartphone-original-imadq5p9gpzzhpks.jpeg',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB'
      }
    ]
    expect(getPhones(state)).toEqual(expectedPhones)
  })

  it('Should return rendered phones length', () => {
    expect(getRenderedPhonesLength(state)).toBe(3)
  })

  it('Should return total basket price', () => {
    expect(getTotalBasketPrice(state)).toBe(2729)
  })

  it('Should return total basket count', () => {
    expect(getTotalBasketCount(state)).toBe(3)
  })

  it('Should return a list of categories', () => {
    const expectedCategories = [
      {
        id: '1',
        name: 'Apple'
      },
      {
        id: '2',
        name: 'Samsung'
      }
    ]
    expect(getCategories(state)).toEqual(expectedCategories)
  })

  it('Should return active category id', () => {
    const ownProps = {
      params: {
        id: '1'
      }
    }
    expect(getActiveCategoryId(ownProps)).toBe('1')
  })

  it('Should return a list of phones in basket with count', () => {
    const expectedBasketPhones = [
      {
        id: '1',
        categoryId: '1',
        name: 'Apple iPhone 5c',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 823,
        image: '/uploads/iphone5c-selection-hero-2013.png',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        count: 1
      },
      {
        id: '2',
        categoryId: '1',
        name: 'Apple iPhone 6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egestas',
        price: 953,
        image: '/uploads/51u6y9Rm8QL._SY300_.jpg',
        cpu: '1.3GHz Apple A6',
        camera: '8mp (3264x2448)',
        size: '124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)',
        weight: '132 grams (4.7 ounces) with battery',
        display: '4.0 326 pixel density',
        battery: '1480 mAh',
        memory: '16GB, 32GB and RAM 1 GB',
        count: 2
      }
    ]
    expect(getBasketPhonesWithCount(state)).toEqual(expectedBasketPhones)
  })
})
