let data = [
    {
        profile : {
            photo: "photos/Abdelhamid_Fadel.png",
            firstName: "Abdelhamid",
            lastName: "Fadel",
            birthday: {
                day: 29,
                month: 11,
                year: 2000
            },
            phone: "+212767347766",
            email: "fadelabdelhamid1@gmail.com",
            address: "El Jadida, Maroc",
            professionalSummary: `
                                Étudiant passionné en ingénierie logicielle
                                à la recherche d’opportunités pour acquérir
                                de nouvelles compétences et appliquer mes
                                connaissances en programmation.
                                Je possède de solides compétences techniques
                                dans les langages de programmation tels que
                                Java, JavaScript et C. Maîtrise des technologies
                                Web telles que Java Enterprise Edition(JEE) et
                                Node.js. Je recherche un environnement de travail
                                stimulant où je peux apprendre, évoluer et
                                contribuer à des projets de développement de
                                logiciels passionnants.
                                `,
            links: ["https://www.linkedin.com/in/fadelabdelhamid/", "https://twitter.com/a_fadel_dev/"]
        },
        education: [
            {
                diploma: "Master Qualité du Logiciel (MQL)",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Professionnelle - Ingénierie des Systèmes d’information et Réseaux",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2021
            },
            {
                diploma: "Diplôme Universitaire de Technologie - Génie Informatique",
                organisation: "EST Safi - Université Cadi Ayyad - Safi",
                year: 2020
            },
            {
                diploma: "Baccalauréat",
                organisation: "Lycée Abou Chouaib Doukkali - El Jadida",
                year: 2018
            }
        ],
        technologySkills: [
            {
                skill: "Jakarta Enterprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Express.js", "PHP"]
            },
            
            {
                skill: "Ingénierie DevOps",
                details: ["Maven", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
            },
            {
                skill: "Bases de données",
                details: ["MySQL", "PostgreSQL", "MongoDB", "Oracle Database"]
            },
            {
                skill: "Analyse et conception",
                details: ["UML", "MERISE", "Design Patterns"]
            },
            {
                skill: "Web Services",
                details: ["REST", "SOAP"]
            },
            {
                skill: "Technologies XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            }
        ],
        experiences: [
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Estimation des mesures du corps humain à partir d’images, en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2021,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "Laboratoire LAPSSI ESTS - Safi",
                title: "Détection des maladies des plantes à partir des images en utilisant des techniques de Computer vision",
                technologies: ["Python", "Tensoflow", "Keras"],
                year: 2020,
                duration: "2 mois"
            },
            {
                type: "Stage",
                organisation: "OCP Jorf Lasfar",
                title: "Développement d’une application web, pour la gestion des réparations du matériel",
                technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
                year: 2019,
                duration: "2 mois"
            }
        ],
        softSkills: [
            "Créativité", "Curiosité", "Flexibilité", "Autonomie", "Adaptabilité",
            "Sens du détail", "Bonne communication", "Gestion de l’information"
        ],
        languages: [
            {
                language: "Français",
                level: "B2",
                certification: "TCF",
                experience: ""
            },
            {
                language: "Anglais",
                level: "C1",
                certification: "",
                experience: "" 
            },
            {
                language: "Arabe",
                level: "Langue maternelle",
                certification: "",
                experience: ""
            }
        ],
        interests: ["Jeux d'échecs", "Jeux vidéo", "Formula 1", "Volleyball"]
    },
    {
        profile : {
            photo: "photos/Mani_Carmel_Valguena.jpg",
            firstName: "Mani Carmel",
            lastName: "VALGUENA",
            birthday: {
                day: 17,
                month: 7,
                year: 2001
            },
            phone: "+212 (0)6 84 20 74 21",
            email: "manicarmelvalguena@gmail.com",
            address: "Fès, Maroc",
            professionalSummary: `Aspirant ingénieur logiciel poursuivant un master, avec une base solide en informatique et une expérience 
                    pratique dans le développement de logiciels.Guidé par un amour pour la découverte et un engagement à 
                    l'excellence dans mon travail, je suis constamment en quête de nouvelles opportunités de croissance 
                    et d'apprentissage.
            `,
            links: ["linkedin.com/in/mani-carmel-valguena", "", ""]
        },
        education: [
            {
                diploma: "Master spécialisé Qualité du Logiciel",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: "En cours"
            },
            {
                diploma: "Licence Sciences et Techniques Génie Logiciel",
                organisation: "FST - Université Moulay Ismail - Errachidia",
                year: 2023
            },
            {
                diploma: "Baccalauréat francais, série scientifique",
                organisation: "Lycée Francais de Lomé - Lomé",
                year: 2019
            }
        ],
        technologySkills: [
            {
                skill: "Analyse et Conception",
                details: ["UML", "Merise", "Design Patterns"
                ]
            },
            {
                skill: "Technologie Java",
                details: ["POO", "Annotations & Reflections", "Généricité", "Threads",
                        "JDBC", "Programmation fonctionnelle"
                ]
            },
            {
                skill: "Base de données",
                details: ["MySQL", "Oracle Database", "MongoDB"
                ]
            },
            {
                skill: "Jakarta Entreprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Apache TOMCAT"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "JavaScript", "Node.js", "React", "Angular", "ExpressJs" ]
            },
            {
                skill: "Technologie XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            },
            {
                skill: "Services Web",
                details: ["REST", "GraphQL"]
            },
            {
                skill: "Ingénierie DevOps",
                details: ["Git", "GitHub", "GitLab", "Trello", "JUnit", "Ant", "Maven", "Mockito"]
            },
            
        ],
        experiences: [
            {
                type: "Projet",
                organisation: "FSDM",
                title: "Développement d'une Api Rest sous Node.Js et d'une interface Repository sous Angular",
                technologies: ["HTML", "CSS", "JavaScript", "Angular", "Node.JS", "ExpressJs"],
                year: 2024,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "FSDM",
                title: "Réalisation d'une application CRUD avec comme solution de persistance de données un fichier XML",
                technologies: ["Java", "Swing", "base de données XML"],
                year: 2024,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "FST",
                title: "Gestion d'un parc informatique",
                technologies: ["Java", "Swing", "JDBC", "MySQL"],
                year: 2022,
                duration: "2 mois"
            }
        ],
        softSkills: ["Communication", "Intelligence Emotionnelle", "Ecoute active", 
                        "Capacité de Résolution de problèmes", "Adaptabilité", 
                        "Rigueur"
        ],
        languages: [
            {
                language: "Français",
                level: "C2",
                certification: "",
                experience: ""
            },
            {
                language: "Anglais",
                level: "B1",
                certification: "",
                experience: "" 
            },
            {
                language: "Espagnol",
                level: "B1",
                certification: "",
                experience: "" 
            }
        ],
        interests: ["NTIC", "Tennis de Table", "Football", "Voyage"]
    },
    {
        profile: {
            photo: "photos/El_Mehdi_Amarti_Riffi.png",
            firstName: "El Mehdi ",
            lastName: "Amarti Riffi",
            birthday: {
                day: 12,
                month: 1,
                year: 2002
            },
            phone: "0772587266",
            email: "mehdiamarti33@gmail.com",
            address: "12 LOTS SALMA APPT 12 RTE AIN CHKEF FES",
            professionalSummary: `Étudiant en première année Master Qualité du Logiciel (MQL), je suis à la recherche d'un stage dans le domaine du développement logiciel pour mettre en pratique mes compétences.
            `,
            links: ["https://github.com/mehdiI2002", "https://www.linkedin.com/in/el-mehdi-amarti-riffi"]
        },
        education: [
            {
                diploma: "Master qualité du logiciel (MQL)",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2025
            },
            {
                diploma: "Licence Fondamentale en Sciences Mathématiques et Informatique",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2023
            },
            {
                diploma: "DEUG en Sciences Mathématiques et Informatique",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2022
            },
            {
                diploma: "Baccalauréat International en Sciences Mathématiques option B",
                organisation: "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                year: 2019
            }
        ],
        technologySkills: [
            {
                skill: "Jakarta Entreprise Edition (JEE)",
                details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                    "modèle DAO", "Framework Spring / Spring Boot", "JPA", "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                skill: "Ingénierie du Web",
                details: ["HTML", "CSS", "PHP", "JavaScript", "Node.js", "React", "Angular"]
            },
    
            {
                skill: "Ingénierie DevOps",
                details: ["Jira", "Maven", "Git", "GitHub", "GitLab", "Jenkins", "JUnit", "Selenuim"]
            },
            {
                skill: "Technologie XML",
                details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                    "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
            },
            {
                skill: "Conception et modélisation",
                details: ["UML", "Merise"]
            },
            {
                skill: "Bases de données",
                details: ["MySQL", "Oracle"]
            }
    
    
        ],
        experiences: [
            {
                type: "Projet",
                organisation: "FSDM",
                title: " Réalisation Application gestion des étudiants",
                technologies: ["Java", "Java swing", "DOM"],
                year: 2024,
                duration: "1 mois"
            },
            {
                type: "Projet",
                organisation: "FSDM",
                title: "Application de génération de diagrammes de classe et de packages avec Java",
                technologies: ["Java", "Java swing", "DOM"],
                year: 2024,
                duration: "1 mois"
            }
        ],
        softSkills: ["Communication", "Esprit d'équipe",
            "Créativité"
    
        ],
        languages: [
            {
                language: "Français",
                level: "Bonne maîtrise", 
                certification: "DELF|DALF|TCF|TEF",
                experience: ""
            },
            {
                language: "Anglais",
                level: "Niveau moyen",
                certification: "TOEFL|TOEIC|...",
                experience: ""
            }
        ],
        interests: ["Kick boxing", "échecs"]
    },
    {
        profile: {
        photo: "photos/Manal_Zazouli.png",
        firstName: "Manal",
        lastName: "ZAZOULI",
        birthday: {
            day: 13,
            month: 8,
            year: 2001
        },
        personalSummary: " Je suis une développeuse Full-Stack passionnée de 23 ans, étudiante en master Qualité du Logiciel  Avec une licence en éducation spécialisée en informatique et un baccalauréat en sciences physiques, j'ai acquis une solide formation en développement front-end et back-end, ainsi qu'en gestion de projets.Mes compétences couvrent Jakarta EE, le développement web, les technologies XML et l'ingénierie DevOps. Je recherche un stage pour travailler sur des projets innovants et me préparer à devenir ingénieure en qualité du logiciel.",
          professionalSummary: "étudiante en Master Qualité du logiciel",
        phone: "+212 624 73 98 82",
        email: "manalzazouli10@gmail.com",
        address: "Khénifra/Fés - Maroc",
        links: [
           "https://www.linkedin.com/in/manal-zazouli-477233234/",
           "https://github.com/ManalZZL"
        ]
    },
    education: [
        {
            diploma: "Master Qualité du logiciel",
            organisation: "Faculté des sciences Dher El Mehraz Fes",
            year: "En cours"
        },
        {
            diploma: "Licence d'éducation en Informatique",
            organisation: "École normale supèrieure Mèknes",
            year: "2021-2023"
        },
        {
            diploma: "Baccalauréat sciences physiques",
            organisation: "Lycée qualifiant Tarik - Khénifra",
            year: "2019"
        }
    ],
    technologySkills: [
        
        {
            skill: "Jakarta Enterprise edition",
            details: ["Architecture 3 tiers", "Modèle MVC2", "Servlets et JSP",
                "modèle DAO", "JPA",  "Administration Tomcat"]
        },
        {
            skill: "Ingénierie du Web",
            details: ["HTML", "CSS", "JavaScript", "Node.js","Angular" ]
        },
        {
            skill: "Ingénierie DevOps",
            details: ["Maven", "Ant", "Git", "GitHub", "GitLab", "Jira", "JUnit"]
        },
        {
            skill: "Technologie XML",
            details: ["Standard XML", "Bases de données XML", "Parseurs XML (DOM, SAX)",
                "DTD", "XSD (XML Schema)", "XSLT", "XPath", "XQuery"]
        },
        {
            skill: "Gestion de projet ",
            details: ["Pert", "Gantt","UML"]
        },
    ],
    experiences: [
        {
            type: "Stage",
            organisation: "Lycée EL Manfalouti- Mèknes - Ecole Normale supèrieure",
            title: "Enseignante de l'informatique en secondaire",
            technologies: "",
            year: "Dec 2022 - Jan 2023",
            duration: "1 mois",
            description: "Lors de mon parcours à l'ENS, j'ai réalisé un stage au sein du lycée El Manfalouty à Meknès, où j'ai partagé mes connaissances avec les étudiants de première année, en mettant l'accent sur l'algorithmique, les bases de la programmation et leur importance. Ce stage m'a permis d'acquérir diverses compétences, notamment en matière de communication interpersonnelle et de travail avec des profils et des personnalités variés"
        },
        {
            type: "Stage",
            organisation: "Lycée Qualifiant Toulal- Mèknes - Ecole Normale supèrieure",
            title: "Plateforme d'apprentissage / Application de bureau de Gestion de bibliothèque",
            technologies:[ "Moodle", "JAVA (JDBC, Swing)","Mysql ."],
            year: "Mar 2023 - Jun 2023",
            duration: "3 mois",
            description: "Lors de mon stage, au sein du lycée, j'ai été impliqué dans des activités administratives au cours desquelles j'ai identifié certains problèmes. Pour y remédier, j'ai proposé deux solutions que j'ai réalisées : la mise en place d'une plateforme d'apprentissage en ligne en utilisant Moodle, ainsi que le développement d'une application de gestion de bibliothèque du lycée en utilisant Java."
        }
    ],
    softSkills: [
        "Gestion de stress",
        "Communication et Empathie",
        "Travail en équipe",
        "Rigueur et Organisation","Intelligence Emotionnelle",
    ],
    languages: [
        {
            language:"Arabe",
            level: "Courante",
            certification: "",
            experience: ""
        },
      {
        language: "Français",
        level: "C1",
        certification: "",
        experience: ""
      },
      {
        language: "Anglais",
        level: "B2",
        certification: "",
        experience: "" 
    }
    ],
    interests: [
        "Musculation",
        "Powerlifting",
        "La lecture et l'écriture"
    ]
    },
    {
        "profile": {
            "photo": "photos/Marouane_ElGhayate.jpeg",
            "firstName": "Marouane",
            "lastName": "ElGhayate",
            "birthday": {
                "day": 19,
                "month": 12,
                "year": 2000
            },
            "phone": "0648437955",
            "email": "elghayate28@gmail.com",
            "address": "Fès, Maroc",
            "professionalSummary": "Actuellement inscrit dans le programme de Master Qualite du Logiciel (MQL) à la faculté des sciences Dhar El Mahraz je suis à la recherche d'un stage PFE. Ayant des bonnes connaissances sur les architectures logicielles et les nouvelles technologies informatique, en l'occurence Jakarta EE, Spring Boot et React. En tant que développeur Java, ma mission consiste de la conception et l'implémentation des solutions logicielles de haute qualité qui répondent aux besoins des entreprises et des utilisateurs. J'aspire à améliorer constamment mes compétences et mes connaissances, et à collaborer efficacement avec mon équipe et les parties prenantes afin de fournir de la valeur.",
            "links": [
                "https://www.linkedin.com/in/marouane-elghayate-42b116172/",
                "https://github.com/marouaneelghayate/"
            ]
        },
        "education": [
            {
                "diploma": "Master Specialise en Qualite du Logiciel MQL",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2023
            },
            {
                "diploma": "Licence en sciences mathématiques et informatiques SMI",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2023
            },
            {
                "diploma": "DEUG en sciences mathématiques et informatiques SMI",
                "organisation": "FSDM - Université Sidi Mohammed ben Abdellah - Fès",
                "year": 2022
            }
        ],
        "technologySkills": [
            {
                "skill": "Jakarta Entreprise Edition (JEE)",
                "details": [
                    "Architecture 3 tiers",
                    "Modèle MVC2",
                    "Servlets et JSP",
                    "modèle DAO",
                    "Framework Spring / Spring Boot",
                    "JPA",
                    "Hibernate",
                    "Administration Tomcat"
                ]
            },
            {
                "skill": "Ingénierie du Web",
                "details": [
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "Node.js",
                    "React"
                ]
            },
            {
                "skill": "Ingénierie DevOps",
                "details": [
                    "Maven",
                    "Git",
                    "GitHub",
                    "GitLab",
                    "Jira",
                    "Jenkins",
                    "JUnit",
                    "Selenuim",
                    "JMeter",
                    "Gitlab CI",
                    "Docker"
                ]
            },
            {
                "skill": "Technologie XML",
                "details": [
                    "Standard XML",
                    "Bases de données XML",
                    "Parseurs XML (DOM, SAX)",
                    "DTD",
                    "XSD (XML Schema)",
                    "XSLT",
                    "XPath",
                    "XQuery"
                ]
            }
        ],
        "experiences": [
            {
                "type": "Projet",
                "organisation": "FSDM",
                "title": "générateur de diagrammes UML",
                "technologies": [
                    "Java",
                    "Swing",
                    "DOM",
                    "SAX"
                ],
                "year": 2023,
                "duration": "1 mois"
            },
            {
                "type": "Projet",
                "organisation": "FSDM",
                "title": "Réalisation d'une application de Gestion de CVs",
                "technologies": [
                    "HTML",
                    "CSS",
                    "JavaScript"
                ],
                "year": 2023,
                "duration": "1 mois"
            }
        ],
        "softSkills": [
            "Communication",
            "Esprit d'équipe",
            "Intelligence Emotionnelle",
            "Empatie et Ecoute",
            "Créativité",
            "Capacité de Résolution de problèmes",
            "Adaptabilité",
            "Gestion du Temps",
            "Rigueur",
            "Organisation",
            "Gestion du Stress",
            "Présence"
        ],
        "languages": [
            {
                "language": "Français",
                "level": "bonne maîtrise",
                "certification": "DELF|DALF|TCF|TEF",
                "experience": ""
            },
            {
                "language": "Anglais",
                "level": "courant",
                "certification": "TOEFL|TOEIC|...",
                "experience": ""
            },
            {
                "language": "arabe",
                "level": "Langue Maternelle",
                "certification": "TOEFL|TOEIC|...",
                "experience": ""
            }
        ],
        "interests": [
            "jouer au échecs",
            "faire du sport",
            "Programmation"
        ]
    },
]