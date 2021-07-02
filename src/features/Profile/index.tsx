import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from 'common/types'
import { Deck } from './components/Deck'
import { Info } from './components/Info'
import { Video } from './components/Video'
import styles from './styles.module.sass'

const tabs = [
  { label: 'Info', Component: Info },
  { label: 'Video', Component: Video },
  { label: 'Deck', Component: Deck }
]

export const Profile = () => {
  const { profile } = useSelector((state: RootState) => state.profile)
  const [tab, setTab] = useState(tabs[0])

  if (!profile) return <>Profile not found</>

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerContainer}>
        <div className={styles.aboutProfileContainer}>
          <div className={styles.photoContainer}>
            <img src={profile.photoURL} alt={`${profile.first_name} ${profile.last_name}`} />
          </div>
          <div className={styles.infoContainer}>
            <div className={styles.displayName}>{profile.first_name} {profile.last_name}</div>
            <div className={styles.specific}>Stage shifting cancer detection</div>
            <div className={styles.industries}>{profile.industries.join(', ')}</div>
          </div>
        </div>
        <div className={styles.otherContainer}>
          <div className={styles.title}>Status</div>
          <div className={styles.content}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</div>
        </div>
      </div>
      <div>
        {tabs.map(({ label, Component }) => (
          <div onClick={() => setTab({ label, Component })}>{label}</div>
        ))}
      </div>
      <div>
        <tab.Component />
      </div>
    </div>
  )
}
