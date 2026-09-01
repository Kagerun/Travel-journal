import { Header } from "/components/Header.jsx"
import { Entry } from "/components/Entry.jsx"
import data from "/data.js"

export function App() {
    const entries = data.map((entry) => {
        return (
            <Entry
                key={entry.id}
                img={entry.img}
                country={entry.country}
                googleMapsLink={entry.googleMapsLink}
                title={entry.title}
                dates={entry.dates}
                text={entry.text}
            />
        )
    })

    return (
        <>
            <Header />
            {entries}
        </>
    )
}