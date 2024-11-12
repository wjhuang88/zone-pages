'use client';

import GitalkComponent from "gitalk/dist/gitalk-component"

import 'gitalk/dist/gitalk.css'
import styles from './Gitalk.module.scss'

export default function GitalkPanel({id}) {
  return <div className={styles.gitalkWrap}>
    <GitalkComponent options={{
    clientID: "Ov23li3B9TnYLEBmCaYP",
    clientSecret: "688f589de997cfad8a13ca00b57aaf29c8fbecef",
    repo: "zone-comments",
    owner: "wjhuang88",
    admin: ["wjhuang88"],
    id: id,
    language: 'zh-CN',
    distractionFreeMode: false
    }} />
  </div>
}