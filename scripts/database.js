const database = {
    paints = [
        {
            id: 1,
            color: "Silver",
            price: 100.00
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 125.00
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 150.00
        },
        {
            id: 4,
            color: "Spring Green",
            price: 125.00
        }
    ],
    interiors = [
        {
            id: 1,
            type: "beige",
            price: 200.00,
        },
        {
            id: 2,
            type: "beige",
            price: 150.00
        },
        {
            id: 3,
            type: "beige",
            price: 200.00,
        },
        {
            id: 4,
            type: "beige",
            price: 200.00,
        },
    ],
    technologies = [
        {
            id: 1,
            package: "Basic Package",
            price: 0.00
        },
        {
            id: 2,
            package: "Navigation Package",
            price: 0.00
        },
        {
            id: 3,
            package: "Visibility Package",
            price: 0.00
        },
        {
            id: 4,
            package: "Ultra Package",
            price: 0.00
        },
    ],
    wheels = [
        {
            id: 1,
            type: "17-inch Pair Radial",
            price: 200.00,
        },
        {
            id: 2,
            type: "17-inch Pair Radial Black",
            price: 200.00,
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 200.00,
        }, {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 200.00,
        }
    ]
};


export const getPaints = () => {
    return [...database.paints];
};

export const getInteriors = () => {
    return [...database.interiors];
};

export const getTechnologies = () => {
    return [...database.technologies];
};

export const getWheels = () => {
    return [...database.wheels];
};