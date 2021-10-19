# Node.js Daemon Template

[![Build Status][github-actions-svg]][github-actions]
[![Coverage Status][coverall-svg]][coverall-io]

This walkthrough will help you learn how to create a Node.js microservice from scratch.

## Create a microservice

In order to do so, access to [Mia-Platform DevOps Console](https://console.cloud.mia-platform.eu/login), create a new project and go to the **Design** area. From the Design area of your project select _Microservices_ and then create a new one, you have now reached [Mia-Platform Marketplace](https://docs.mia-platform.eu/development_suite/api-console/api-design/marketplace/)!  
In the marketplace you will see a set of Examples and Templates that can be used to set-up microservices with a predefined and tested function.

For this walkthrough select the following template: **Node.js Daemon Template**. After clicking on this template you will be asked to give the following information:

- Name (Internal Hostname)
- GitLab Group Name
- GitLab Repository Name
- Docker Image Name
- Description (optional)

You can read more about this fields in [Manage your Microservices from the Dev Console](https://docs.mia-platform.eu/development_suite/api-console/api-design/services/) section of Mia-Platform documentation.

Give your microservice the name you prefer, in this walkthrough we'll refer to it with the following name: **my-node-service-name**.
Then, fill the other required fields and confirm that you want to create a microservice. You have now generated a *my-node-service-name* repository that is already deployed on Mia-Platform [Nexus Repository Manager](https://nexus.mia-platform.eu/) once build script in CI is successful.

## Save your changes

It is important to know that the microservice that you have just created is not saved yet on the Console. It is not essential to save the changes that you have made, since you will later make other modifications inside of your project in the Console.  
If you decide to save your changes now remember to choose a meaningful title for your commit (e.g "created service my_node_service_name"). After some seconds you will be prompted with a popup message which confirms that you have successfully saved all your changes.  
A more detailed description on how to create and save a Microservice can be found in [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#2-service-creation) section of Mia-Platform documentation.

## Look inside your repository

After having created your first microservice (based on this template) you will be able to access to its git repository from the DevOps Console. Inside this repository you will find an [index.js](https://github.com/mia-platform-marketplace/Node.js-Daemon-Template/blob/master/index.js) file with the following lines of code:

```js
function main(conf) {
  if (!ajv.validate(ENVIRONMENT_VARIABLES_SCHEMA, conf)) {
    pino().error({ errors: ajv.errors }, 'Environment variables are not valid')
    throw new Error('Invalid environment variables')
  }
  const logger = pino({ level: conf.LOG_LEVEL })

  /**
   * Your code here
   */

  logger.info('service dameon has finished its job')
}
```

Wonderful! You are now ready to start customizing your service! After you're done with your implementation you can deploy and verify whether the server is actually working, head over to the next section for further information.

## Deploy

In order to verify whether your code will work in your runtime environment go to the **Deploy** area of the Console.  
Once here select the environment and the branch you have worked on and confirm your choices clicking on the *deploy* button. When the deploy process is finished you will receveive a pop-up message that will inform you.  
Step 5 of [Microservice from template - Get started](https://docs.mia-platform.eu/development_suite/api-console/api-design/custom_microservice_get_started/#5-deploy-the-project-through-the-api-console) section of Mia-Platform documentation will explain in detail how to correctly deploy your project.

## Checkout the logs

In order to verify the service has started and it's actually working head over the the **Runtime** area of the Console, here you will be able to search for your service and view its log.


Congratulations! You have successfully learnt how to modify a blank template into an _Hello World_ Node.js microservice!

[github-actions]: https://github.com/mia-platform-marketplace/Node.js-Custom-Plugin-Template/actions
[github-actions-svg]: https://github.com/mia-platform-marketplace/Node.js-Custom-Plugin-Template/workflows/Node.js%20CI/badge.svg
[coverall-svg]: https://coveralls.io/repos/github/mia-platform-marketplace/Node.js-Custom-Plugin-Template/badge.svg?branch=master
[coverall-io]: https://coveralls.io/github/mia-platform-marketplace/Node.js-Custom-Plugin-Template?branch=master
