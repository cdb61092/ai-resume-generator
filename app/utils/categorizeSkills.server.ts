// Function to categorize skills
export function categorizeSkills(skills) {
    // Initialize an object to hold categorized skills
    const categorizedSkills = {}

    // Iterate over each skill
    skills.forEach((skill) => {
        // Find the category for this skill
        let foundCategory: string | null = null

        // Normalize skill to lowercase for comparison
        const normalizedSkill = skill.toLowerCase()

        for (const [category, categorySkills] of Object.entries(categoryMapping)) {
            // Check if the normalized skill is included in a category's skills (also normalized)
            if (categorySkills.map((s) => s.toLowerCase()).includes(normalizedSkill)) {
                foundCategory = category
                break
            }
        }

        // If the skill fits into a predefined category, add it to the categorizedSkills object
        if (foundCategory) {
            if (!categorizedSkills[foundCategory]) {
                categorizedSkills[foundCategory] = []
            }
            categorizedSkills[foundCategory].push(skill)
        } else {
            // If the skill does not fit into any category, add it to an "Other" category
            if (!categorizedSkills['Other']) {
                categorizedSkills['Other'] = []
            }
            categorizedSkills['Other'].push(skill)
        }
    })

    // Sort the keys of categorizedSkills alphabetically
    return Object.keys(categorizedSkills)
        .sort()
        .reduce((acc, key) => {
            acc[key] = categorizedSkills[key]
            return acc
        }, {})
}

const categoryMapping = {
    'Programming Languages': [
        'Python',
        'Java',
        'JavaScript',
        'C++',
        'C#',
        'Ruby',
        'Go',
        'Rust',
        'Kotlin',
        'TypeScript',
        'Swift',
        'PHP',
        'SQL',
    ],
    Frameworks: [
        'React',
        'Angular',
        'Vue.js',
        'Django',
        'Flask',
        'Spring',
        'ASP.NET',
        'Rails',
        'Express',
        'Laravel',
    ],
    Libraries: [
        'jQuery',
        'TensorFlow',
        'PyTorch',
        'Keras',
        'OpenCV',
        'Pandas',
        'NumPy',
        'Scikit-Learn',
        'Matplotlib',
    ],
    Databases: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Cassandra', 'Redis', 'Elasticsearch'],
    'DevOps Tools': [
        'Docker',
        'Kubernetes',
        'Jenkins',
        'Terraform',
        'Ansible',
        'AWS',
        'Azure',
        'GCP',
        'Git',
        'CI/CD',
    ],
    Frontend: ['HTML', 'CSS', 'Sass', 'Bootstrap', 'Material-UI'],
    Backend: ['Node.js', 'GraphQL', 'REST API'],
    Mobile: ['React Native', 'Flutter', 'Android', 'iOS'],
    'Data Science & Machine Learning': [
        'Data Analysis',
        'Machine Learning',
        'Deep Learning',
        'NLP',
        'Computer Vision',
    ],
    'Big Data': ['Hadoop', 'Spark', 'Kafka'],
    'CMS & Web Platforms': ['WordPress', 'Joomla', 'Drupal', 'Magento', 'Shopify', 'WooCommerce'],
    Other: ['Agile', 'Scrum', 'Microservices', 'Blockchain', 'Cryptography', 'WebRTC', 'SEO'],
}
