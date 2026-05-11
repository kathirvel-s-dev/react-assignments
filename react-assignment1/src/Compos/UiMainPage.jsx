import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from'./UiMainPage.module.css'

const UiMainPage = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.container}>
            <h1>Implementing an useNavigate and useContext</h1>

            <div className={styles.box}>
                <p>1. Login Scenario: User enters name in Login page and goes to Dashboard page.</p>
                <p> Login Scenario: User enters name in Login page and goes to Dashboard page. Username should be visible in Dashboard. Which hook stores the username and which hook navigates to Dashboard?</p>
                <button onClick={() => navigate("/qz1")}>
                    Question 1 click to see
                </button>
            </div>

            <div className={styles.box}>
                <p>2. Logout Scenario: User clicks Logout and goes back to Login page.</p>
                <p>Logout Scenario: User clicks Logout in Dashboard and should go back to Login page. Login data should be cleared. Which hooks will you use?</p>
                <button onClick={() => navigate("/qz1")}>
                    Question 2 click to see
                </button>
            </div>

            <div className={styles.box}>
                <p>3. Name Sharing Scenario: Share name between pages.</p>
                <p>Name Sharing Scenario: User enters name in Home page and Profile page shows the same name. How will you share the data between pages?</p>
                <button onClick={() => navigate("/qz1")}>
                    Question 3 click to see
                </button>
            </div>

            <div className={styles.box}>
                <p>4. Button Navigation Scenario: Go to About page.</p>
                <p>Button Navigation Scenario: User clicks Next button in Home page and About page should open. Which hook will you use?</p>
                <button onClick={() => navigate("/qz1")}>
                    Question 4 click to see
                </button>
            </div>

            <div className={styles.box}>
                <p>5. Back Navigation Scenario: Return to Home page.</p>
                <p>Back Navigation Scenario: User moves from Home page to Details page and clicks Back button to return Home. How will you implement navigation?</p>
                <button onClick={() => navigate("/qz1")}>
                    Question 5 click to see
                </button>
            </div>

            <div className={styles.box}>
                <p>6. Cart Counter Scenario: Share cart data between pages.</p>
                <p>Cart Counter Scenario: User adds items in Home page and Cart page shows total items. How will multiple pages access the same data</p>
                <button onClick={() => navigate("/home")}>
                    Question 6 click to see
                </button>
            </div>
        </div>
    )
}

export default UiMainPage