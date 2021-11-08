import Head from 'next/head';
import styles from './styles.module.scss';

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | ig.news</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>08 de novembro de 2021</time>
            <strong>adahdjkahdja</strong>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur omnis deleniti quidem amet culpa in facere consequatur, ducimus iste impedit voluptate harum! Recusandae odio nobis, sed pariatur facilis beatae.</p>
          </a>
          <a href="#">
            <time>08 de novembro de 2021</time>
            <strong>adahdjkahdja</strong>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur omnis deleniti quidem amet culpa in facere consequatur, ducimus iste impedit voluptate harum! Recusandae odio nobis, sed pariatur facilis beatae.</p>
          </a>
          <a href="#">
            <time>08 de novembro de 2021</time>
            <strong>adahdjkahdja</strong>
           <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto tenetur omnis deleniti quidem amet culpa in facere consequatur, ducimus iste impedit voluptate harum! Recusandae odio nobis, sed pariatur facilis beatae.</p>
          </a>
        </div>
      </main>

    </>
  );
}