pipeline {
    agent none
    stages {
        stage('Checkout') {
            agent any
            steps {
                checkout([
                    $class: 'GitSCM',
                    branches: [[name: env.GIT_BUILD_REF]],
                    userRemoteConfigs: [[url: env.GIT_REPO_URL, credentialsId: env.CREDENTIALS_ID]]
                ])
            }
        }
        stage('Install modules & Build') {
            agent {
                docker {
                    image 'node:14-alpine'
                    args '-v $HOME/.npm:/root/.npm'
                }
            }
            steps {
                sh 'yarn'
                sh 'yarn build'
            }
        }
        stage('Pack docker image') {
            agent any
            steps {
                script {
                    def myImage = docker.build('lindenz-dev/lindenz-index:${CI_BUILD_NUMBER}')
                    docker.withRegistry('https://ccr.ccs.tencentyun.com', '2b95bae2-443c-49d4-bb86-2ce448f89845') {
                        myImage.push(env.CI_BUILD_NUMBER)
                    }
                }
            }
        }
    }
}