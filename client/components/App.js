import React from 'react'
import NavBar from 'Components/NavBar'
import Footer from 'Components/Footer'
import Router from 'Components/Router'
import { Helmet } from 'react-helmet'

export default () => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <title lang="en">BANG! CALC: Score calculator for BANG! </title>
      <meta
        name="description"
        content="Calculator for score in board game BANG! based on official scoring table. You can calculate score in real time in table. Bang! is a card game released by DV Giochi in 2002. The game is known worldwide as Bang!, except in France, where it was known as Wanted!. This scoring system is based on this Official tournament scoring system."
      />
      <meta name="robots" content="index, follow" />
      <meta name="google-site-verification" content="ijUCk4to6Jsdgul6kLRztuF33PJo8i-2oQzbo8YH_hg" />
    </Helmet>
    <NavBar />
    <Router />
    <Footer />
  </>
)
