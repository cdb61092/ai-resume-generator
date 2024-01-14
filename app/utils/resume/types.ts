type CompanyLocation = {
    company: string
    location: string
}

type contactInfo = {
    location: string
    email: string
    phone: string
}

interface createJobTitleAndDate {
    jobTitle: string
    date: string
}

interface universityAndLocation {
    university: string
    location: string
}

interface degreeAndDate {
    degree: string
    date: string
}

export type { CompanyLocation }
