pipeline {
    agent any
    environment {
        IMAGE_NAME = 'nikhilvivaops/react-app'
        DOCKERHUB_CREDS = credentials("dockerhub")
    }
    stages {
        stage("checkout") {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '01675765-6910-4cb5-b9be-9eeabe692c5d', url: 'https://github.com/Nikhil-321/social-media-react.git']])
                echo "Git checkout completed"
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
                echo "${DOCKERHUB_CREDS}"
            }
        }
    }

}