@Library('shared-library') _

pipeline {
    agent any
    environment {
        IMAGE_NAME = 'nikhilvivaops/react-app'
        DOCKERHUB_CREDS = credentials("dockerhub")
    }
    stages {
        stage("checkout") {
            steps {
               checkoutCode()
            }
        }
        stage("build") {
            environment { HOME = "${env.WORKSPACE}" }
            steps {
                buildApp()
            }
        }

        stage("push") {
            steps {
                script {
                  pushtoDockerHub()
                }
            }
        }
    }

}