import { PageHeader, CurrentExperience } from "./styles"

export default function ExperienceBar() {
    return(
        <PageHeader>
            <span>0 xp</span>
            <div>
                <div style={{ width: "50%" }}></div>
                <CurrentExperience style={{ left: "50%" }}> 300 xp</CurrentExperience>
            </div>
            <span>600 xp</span>
        </PageHeader>
    )
}