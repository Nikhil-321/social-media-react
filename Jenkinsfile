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
                sh "docker build -t ${env.IMAGE_NAME} ."
                echo "Image build successful"
            }
        }

        stage("push") {
            steps {
                script {
                    sh """
                    echo ${DOCKERHUB_CREDS_PSW} | docker login -u ${DOCKERHUB_CREDS_USR} --password-stdin
                    docker push ${env.IMAGE_NAME} 
                     """
                }
            }
        }
    }

}