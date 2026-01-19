'use client'

import React from 'react';
import { Container, Typography, Card, CardContent, List, ListItem, ListItemIcon } from '@mui/material';
import Nav from '../Components/nav'
import styles from '../../styles/WorkExperience.module.css'

export default function WorkExperience() {
    return (
        <div className={`${styles.container} background`}>
            <Nav />
            <Container maxWidth="md" className={styles.background}>
                <Typography variant="h3" align="center" gutterBottom>
                    Work Experience
                </Typography>
                <Card variant="outlined" className={styles.experienceCard}>
                    <CardContent>
                        <Typography variant="h5" className={styles.companyName}>
                           Bank of China and Prudential Trustee Limited 
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                           Programmer 
                        </Typography>
                        <Typography variant="body2" className={styles.dateLocation}>
                            📅 12/2025 - Present 📍 Hong Kong 
                        </Typography>
                        <Typography variant="h6" className={styles.jobDescriptionsTitle}>
                            Job Responsibilities
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                  Participate in .NET development on Visual Basic, ASP with SQL server for internal applications
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                  Report development and maintenance with Crystal Report for ORSO new business and Fund Services
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                  Supporting website development / enhancement for pension and asset servicing with outsourcing vendors
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                  API development and maintenance
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
                <Card variant="outlined" className={styles.experienceCard}>
                    <CardContent>
                        <Typography variant="h5" className={styles.companyName}>
                            Draeger Safety UK Ltd
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary">
                            Embedded Software Engineer - Student Placement
                        </Typography>
                        <Typography variant="body2" className={styles.dateLocation}>
                            📅 07/2023 - 06/2024 📍 Blyth, Newcastle
                        </Typography>
                        <Typography variant="h6" className={styles.jobDescriptionsTitle}>
                            Job Responsibilities
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Created and implemented test cases for application testing using C# and Appium, increasing efficiency by 80% with Android Studio Emulators.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Implemented hardware functionalities using C++.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Developed and refactored firmware and configuration update software using C# and WPF.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Created and maintained REST-API using NodeJS.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Set up Azure Pipeline and agents for automated testing and deployment.
                                </Typography>
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>✔️</ListItemIcon>
                                <Typography>
                                    Designed an appealing web portal for communication between hardware and users.
                                </Typography>
                            </ListItem>
                        </List>
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
}
