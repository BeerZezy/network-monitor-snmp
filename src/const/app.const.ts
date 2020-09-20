export const  PORT = 9003
export const DEVICE_IP = ['10.99.4.1', '10.99.6.1', '10.99.3.1', '10.99.2.1', '10.99.7.1', '10.99.1.1', '10.99.5.1', '10.61.4.49']
export const DEVICE_NAME = ['r124', 'r330a', 'r101c', 'r415', 'rshop', 'sw9400', 'sw3850', 'rsad']

export const DEVICES = [
    { 
        device_name: 'r124', 
        device_ip: '10.99.4.1'
    },
    { 
        device_name: 'r330a', 
        device_ip: '10.99.6.1'
    },
    { 
        device_name: 'r101c', 
        device_ip: '10.99.3.1'}
        ,
    { 
        device_name: 'r415', 
        device_ip: '10.99.2.1'
    },
    { 
        device_name: 'rshop', 
        device_ip: '10.99.7.1'
    },
    { 
        device_name: 'sw9400', 
        device_ip: '10.99.1.1'
    },
    { 
        device_name: 'sw3850', 
        device_ip: '10.99.5.1'
    },
    { 
        device_name: 'rsad', 
        device_ip: '10.61.4.49'
    },
]

export const DEVICE_LIST = [
    // sw9400
    {
        device_name: "sw9400",
        ip: "10.99.1.1",
        oids: [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 2],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 98],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 99],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 100],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 102],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 103],
        ]
    },
    {
        device_name: 'r124', 
        ip: '10.99.4.1',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 32],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 34]
        ]
    },
    {
        device_name: 'r415', 
        device_ip: '10.99.2.1',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10101],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10102],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10103],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10104],
        ]
    },
    {
        device_name: 'r101c', 
        ip: '10.99.3.1',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 31],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 35]
        ]
    },
    {
        device_name: 'sw3850', 
        ip: '10.99.5.1',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 3],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 4],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 10],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 11],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 20],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 21],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 26],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 27]
        ]
    },
    {
        device_name: "r330a",
        ip: "10.99.6.1",
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 32],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 35]
        ]
    },
    {
        device_name: 'rshop', 
        ip: '10.99.7.1',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 34],
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 35]
        ]
    },
    {
        device_name: 'rsad', 
        ip: '10.61.4.49',
        oids:  [
            [1, 3, 6, 1, 2, 1, 2, 2, 1, 10, 26]
        ]
    }
  ]
