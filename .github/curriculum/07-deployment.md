# Ticket 7: Deployment

**Task:** Share your portfolio with the world!

### Instructions

1. Create a new, **public** repository on your personal GitHub account named `portfolio`.
2. In your terminal, go inside the `portfolio` folder, run the following commands to link it to your new repository (replace `YOUR_USERNAME` with your GitHub username):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git push -u origin main
   ```
3. Go to the following link and sign up for (AWS Amplify)[https://aws.amazon.com/free/]
3. From your (AWS Console)[https://us-east-2.console.aws.amazon.com/console/home?region=us-east-2], search for (AWS Amplify)[https://us-east-2.console.aws.amazon.com/amplify/apps]
4. Click on "Create app" and select "GitHub" as the source.
5. Follow the prompts to connect your new `portfolio` GitHub repository to the hosting service.
5. Select your portfolio repository
5. Make sure the build settings are correct (Frontend build command: `npm run build` and the output directory is `dist`). You can leave the rest of the settings as default.
6. Deploy! Once finished, share your live URL with others.
7. Bonus: Add a "README.md" to your GitHub repo explaining what you built and the tech stack you used.
