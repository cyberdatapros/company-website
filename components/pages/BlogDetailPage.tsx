import styles from '@/css/blog-detail.module.css'
import React from 'react'
import { getDateFormat } from '@/utils/dataFormatter'
import PageWrapper from '../wrappers/PageWrapper'
import { Blog } from '@prisma/client'

const BlogDetailPage = async ({ data }: { data: Blog }) => {
  return (
    <PageWrapper>
      <div className={styles['blog-detail-page']}>
        <div className={styles['blog-detail-content-wrapper']}>
          <div className={styles['blog-detail-header-container']}>
            <div className={styles['blog-detail-image']}>
              <img src={data.image} width={50} height={50} alt="blog-image" />
            </div>
            <div className={styles['blog-detail-header']}>
              <h1>{data.title}</h1>
              <div className={styles['blog-detail-attribute']}>
                <img />
                <span>By CyberData Pros</span>
              </div>
              <div className={styles['blog-detail-attribute']}>
                <img />
                <span>{getDateFormat(`${data.createdAt}`)}</span>
              </div>
            </div>
          </div>
          <div
            className={styles['blog-content']}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </div>
      </div>
    </PageWrapper>
  )
}

export default BlogDetailPage
