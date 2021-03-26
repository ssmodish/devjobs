import { Head } from 'next'

export default function Meta(props) {
  <Head>
    <title>{props.title ? props.title : "Dev Jobs"}</title>
  </Head>
}