import React from 'react'
import clsx from 'clsx'
import styles from './homepage-features.module.css'

const FeatureList = [
  {
    title: '动态徽章',
    description: (
      <>
        <img
          alt="build:passing"
          src="https://img.shields.io/badge/build-passing-brightgreen"
        />
        <br />
        显示您项目的指标。我们为数百种服务提供徽章。
      </>
    ),
  },
  {
    title: '状态徽章',
    description: (
      <>
        创建徽章使用
        <br />
        <img
          alt="any text you like"
          src="https://img.shields.io/badge/any%20text-you%20like-blue"
        />
      </>
    ),
  },
  {
    title: 'Badge-Maker NPM 库',
    description: (
      <>
        使用我们的{' '}
        <a
          href="https://www.npmjs.com/package/badge-maker"
          rel="noreferrer"
          target="_blank"
        >
          NPM 库
        </a>
        <br />
        <code>npm install badge-maker</code>
      </>
    ),
  },
  {
    title: '托管自己的实例',
    description: (
      <>
        使用我们的{' '}
        <a
          href="https://registry.hub.docker.com/r/shieldsio/shields/"
          rel="noreferrer"
          target="_blank"
        >
          Docker 镜像
        </a>
        <br />
        <code>docker pull shieldsio/shields</code>
      </>
    ),
  },
  {
    title: '喜欢 Shields?',
    description: (
      <>
        请考虑{' '}
        <a
          href="https://opencollective.com/shields"
          rel="noreferrer"
          target="_blank"
        >
          捐赠
        </a>{' '}
        我们的活动
      </>
    ),
  },
]

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center padding-horiz--md padding-vert--lg">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  )
}
