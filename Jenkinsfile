pipeline {
    agent { docker { image 'docker:27.5.0' } }
    stages {
        stage("checkout") {
            steps {
                checkout scmGit(branches: [[name: '*/main']], extensions: [], userRemoteConfigs: [[credentialsId: '01675765-6910-4cb5-b9be-9eeabe692c5d', url: 'https://github.com/Nikhil-321/social-media-react.git']])
                echo "Git checkout completed"
            }
        }
        stage("build") {
            steps {
                sh 'docker build -t nikhilvivaops/react-app .'
                echo "Image build successful"
            }
        }
    }

}