pipeline {
    agent { docker { 
        image 'docker:27.4.1-cli-alpine3.21'
        args '-v /var/run/docker.sock:/var/run/docker.sock'     
         }}
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
                sh 'docker build -t nikhilvivaops/react-app .'
                echo "Image build successful"
            }
        }
    }

}