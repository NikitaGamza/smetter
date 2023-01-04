import React from 'react'
import * as VscIcons from 'react-icons/vsc'

export const SidebarData = [
    {
        title: 'Сендвичи',
        path: '/sandviches',
        icon: <VscIcons.VscChevronDown />,
        subNav: [
            {
                title: 'Классический',
                path: '/sandviches/classic',
            },
            {
                title: 'С тунцом',
                path: '/sandviches/tuna',
            },
            {
                title: 'С грибами',
                path: '/sandviches/mashrooms',
            },
        ]
    },
    {
        title: 'Бургеры',
        path: '/burgers',
        icon: <VscIcons.VscChevronDown />,
        subNav: [
            {
                title: 'Классический',
                path: '/burgers/classic',
            },
            {
                title: 'Чизбургер',
                path: '/burgers/cheeseburger',
            },
            {
                title: 'Биг Мак',
                path: '/burgers/bigmac',
            },
            {
                title: 'Биг Тейсти',
                path: '/burgers/bigtasty',
            },
        ]
    },
    {
        title: 'Багет',
        path: '/baguette',
        icon: <VscIcons.VscChevronDown />,
        subNav: [
            {
                title: 'С ветчиной',
                path: '/baguette/ham',
            },
            {
                title: 'С пастрами',
                path: '/baguette/pastrami',
            },
            {
                title: 'Чесночный',
                path: '/baguette/garlic',
            },
            {
                title: 'С перцем гриль',
                path: '/baguette/grilled-pepper',
            },
        ]
    },
]