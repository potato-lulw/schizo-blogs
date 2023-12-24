
import React, { useState } from 'react'
import BlogList from './blog-list'

export default function Home() {
  const [blogs, setBlog] = useState([
    {
      title: "Absurd Chronicles: Hilarity Unleashed",
      body: "Ever heard about the time Granny mistook a banana for a phone? No? Well, welcome to the world of zany happenings and side-splitting tales. In our peculiar universe, everyday objects take on unexpected roles. Picture this: Bob, a penguin, attending a formal gala because, why not? Or the time a rubber chicken became the town's honorary mayor. These whimsical stories will tickle your funny bone and leave you questioning reality, in the best possible way. Join me, Chuckle Maestro, as we embark on a journey through the unpredictable and uproarious landscapes of Schizo Randomville. Laughter guaranteed, sanity optional.",
      author: "xQc",
      id: 0
    },
    {
      title: "Quirky Quandaries: Adventures in Nonsense",
      body: "Buckle up for a rollercoaster of ludicrous escapades in the land of nonsensical wonders! Imagine a world where gravity decides to call in sick, and people find themselves floating in mid-air at the most inconvenient times. Ever met a talking sock with a penchant for stand-up comedy? I have, and it's a tale worth sharing. From cows engaging in philosophical debates to spontaneous dance-offs in the supermarket aisles, these schizo random stories will leave you questioning your grip on reality while embracing the hilarity that ensues. I'm Jest Juggler, your guide through the labyrinth of the absurd—where laughter reigns supreme.",
      author: "OhnePixel",
      id: 1
    },
    {
      title: "Whimsy Wonders: A Symphony of Chaos",
      body: "Hold on to your hats, folks, as we dive headfirst into a carnival of chaos and giggles! Picture this: a group of squirrels forming a rock band and challenging the local pigeons to a battle of the bands. If that's not enough, imagine a library where books tell the stories themselves, occasionally interrupting each other for a heated literary debate. These schizo random tales will have you questioning whether you've stepped into a parallel universe where hilarity reigns supreme. I'm Gigglesmith, your conductor through the symphony of absurdity. Prepare for belly laughs, head scratches, and a journey through the wonderfully wacky world of Whimsy Wonders.",
      author: "xQc",
      id: 2
    }
  ])
  
  return (
    <div className='home'>
        <BlogList blogs = {blogs} title="All Blogs!"/>
        <BlogList blogs = {blogs.filter((blog) => blog.author === "xQc")} title="xQc's Blogs!"/>
    </div>
  )
}



