import { Container, Heading, SimpleGrid} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import thumbMIT6S081notes from '../public/images/contents/MIT6S081notes.png'

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Posts
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="My notes for course MIT 6.S081"
            thumbnail={thumbMIT6S081notes}
            href="https://silkrow.notion.site/MIT-6-S081-4bd01c6d1cda4e9abdfdb669f1f4cc52"
          />
        </SimpleGrid>
      </Section>



    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
