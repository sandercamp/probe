import Page from '../../templates/Page';
import classNames from 'classnames';

import styles from './index.module.scss'
const SolarSystem = () => {
    return (
        <Page>
            <div className={ styles.galaxy }>
                {/* Sun */}
                <div className={ styles.sun }></div>

                {/* Mercury */}
                <div className={ classNames(styles.mercury, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>

                {/* Earth */}
                <div className={ classNames(styles.earth, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default SolarSystem;
