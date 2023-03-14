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

                <div className={ classNames(styles.venus, styles.orbit) }>
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

                <div className={ classNames(styles.mars, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>

                <div className={ classNames(styles.jupiter, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>

                <div className={ classNames(styles.saturn, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>

                <div className={ classNames(styles.uranus, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>

                <div className={ classNames(styles.neptune, styles.orbit) }>
                    <div className={ styles.position }>
                        <div className={ styles.planet }></div>
                    </div>
                </div>
            </div>
        </Page>
    )
}

export default SolarSystem;
