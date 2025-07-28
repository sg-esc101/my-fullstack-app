#Use a specific OpenJDK with Java 21 and Maven
FROM maven:3.9.6-eclipse-temurin-21 AS build

#Set the working Directory inside a container
WORKDIR /app

#Copy the Maven prject files(pom.xml and src)
#This copies pm.xml first to leverage Docker's caching if only code changes
COPY pom.xml .
COPY src ./src

#Build the application using maven
#The 'build' stage here is to compile and package the application
RUN mvn clean package -DskipTests


# ---- Second Stage: Create the final lean image ----
# Use a lightweight JRE image for final application
FROM eclipse-temurin:21-jre

#Set the workng directory
WORKDIR /app

#Copy the built JAR artifact file from 'build' stage
COPY --from=build /app/target/*.jar app.jar

#Expose the port your spring boot apps runs on (default is 8080)
EXPOSE 8080 

#Command to run application when container starts
ENTRYPOINT [ "java", "-jar", "app.jar" ]
