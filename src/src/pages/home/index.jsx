import Navigation from '../../components/navigation'
import styles from './index.module.css'
import fingerPointIcon from '../../assets/icons/finger-point.svg'
import programBannerImage from '../../assets/images/program-card-image.jpg'
import newBanner from '../../assets/images/new-banner.png'
import addIcon from '../../assets/icons/add.svg'
import discordIcon from '../../assets/icons/discord.svg'
import smallProgramImage from '../../assets/images/small-program-image.png'
import { Link } from 'react-router-dom'
import Footer from '../../components/footer'

const HomePage = () => {
    return (
        <>
            <Navigation isLoggedIn={true} />
            <div className={styles.wrapper}>
                <h1 className={styles.mainHeader}>Good morning, Esthera </h1>
                <h3 className={styles.journeyHeader}><img src={fingerPointIcon} alt="finger pointing down icon" /> Start your Journey</h3>
                <div className={styles.programeSection}>
                    <div className={styles.programBanner}>
                        <img className={styles.bannerImage} src={programBannerImage} alt="Woman that is smiling" />
                        <img className={styles.newLabel} src={newBanner} alt="new banner" />
                        <div className={styles.headerSection}>
                            <h4>3 Day Challenge</h4>
                            <h2>Softness of Flexibility</h2>
                            <button className={styles.journeyButton}>Start</button>
                        </div>
                        <span className={styles.duration}>12D 6H 20Min</span>
                    </div>
                    <div className={styles.addProgramSection}>
                        <img className={styles.addIcon} src={addIcon} alt="add icon" />
                    </div>

                    <div className={styles.socialSection}>
                        <div className={styles.discordSection}>
                            <div className={styles.imageAndHeader}>
                                <img src={smallProgramImage} alt="Smiling woman" />
                                <h2>Girlmantra Community</h2>
                            </div>
                            <div className={styles.discordDescription}>
                                Meet fellow participants and stay motivated together. Fitness, Diet, Mental Health -- find support groups for every lifestyle change.
                            </div>
                            <div className={styles.diskordLinks}>
                                <div className={styles.peopleOnline}>
                                    <div className={styles.onlineCircle}></div>
                                    <div>
                                        1,250 people online
                                    </div>
                                </div>
                                <Link to="https://discord.com/" className={styles.discordLink}>
                                    <img className={styles.discordIcon} src={discordIcon} alt="discord icon" />
                                    Connect Discord
                                </Link>
                            </div>
                        </div>
                        <div className={styles.seminarSection}>
                            <h2>PCOS and Pregnancy a seminar with Dr. Harriton</h2>
                            <p>Meet fellow participants and stay motivated together. Fitness, Diet, Mental Health -- find support groups for every lifestyle change.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default HomePage