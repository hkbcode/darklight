import React from "react"
import Layout from "../components/Layout"
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const IndexPage = () => {
  return (
    <Layout>
      <Typography variant="h3">Gatsbyjs with MaterialUI with Github Pages Hosting</Typography>

      <Button variant="contained" color="primary">
        Start Now
      </Button>
      

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
        nesciunt dignissimos pariatur labore cupiditate minima explicabo, sed
        corrupti optio, repellat at voluptas quibusdam suscipit magnam et hic
        eos vel voluptate.
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero quod
        molestiae consequatur. Quidem totam distinctio, ratione explicabo sequi
        odio similique sunt sit quasi sapiente enim odit. Sed atque ipsa
        distinctio?
      </p>
    </Layout>
  )
}

export default IndexPage
