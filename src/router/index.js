import React from 'react'

import WYDiscover from '@/pages/discover'
import WYFriend from '@/pages/friend'
import WYMine from '@/pages/mine'
import WYAlbum from '@/pages/discover/child-pages/album'
import WYArtist from '@/pages/discover/child-pages/artist'
import WYDjradio from '@/pages/discover/child-pages/djradio'
import WYRanking from '@/pages/discover/child-pages/ranking'
import WYRecommend from '@/pages/discover/child-pages/recommend'
import WYSongs from '@/pages/discover/child-pages/songs'

import { Redirect } from 'react-router-dom'

const routes=[
    {
        path: "/",
        exact: true,
        render: () => (
            <Redirect to="/discover"/>
        )
    },
    {
        path: "/discover",
        component: WYDiscover,
        routes: [
            {
                path: "/discover",
                exact: true,
                render: () => (
                    <Redirect to={"/discover/recommend"}/>
                )
            },
            {
                path: "/discover/recommend",
                component: WYRecommend
            },
            {
                path: "/discover/album",
                component: WYAlbum
            },
            {
                path: "/discover/artist",
                component: WYArtist
            },
            {
                path: "/discover/djradio",
                component: WYDjradio
            },
            {
                path: "/discover/ranking",
                component: WYRanking
            },
            {
                path: "/discover/songs",
                component: WYSongs
            }
        ]
    },
    {
        path: "/friend",
        component: WYFriend
    },
    {
        path: "/mine",
        component: WYMine
    }
]

export default routes