def downloadApp() {
    echo 'Downloading the application...'
}

def checkEnv() {
    echo 'Checking node version...'
    sh 'node --version'
}

def setupApp() {
    echo 'Setup the application...'
    sh 'npm install'
}

def buildApp() {
    echo 'Building the application...'
    sh 'npm start'
} 

def testApp() {
    echo 'Testing the application...'
    sh 'npm test'
} 

def deployApp() {
    echo 'Deplying the application...'
    echo "Deploying version ${params.VERSION}"
} 

return this
