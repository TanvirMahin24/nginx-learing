# Task: 
## 1. Create 3 backend services.
Services: 
- **ServiceA** : Minimal nodejs server that returns "Hello From Service A"
- **ServiceB** : Minimal nodejs server that returns "Hello From Service B"
- **ServiceC** : Minimal nodejs server that returns "Hello From Service C"

## 2. Make three route that forwards request to three services
## 3. Replicate ServiceA to 3 instance and load balance among them with **Round Robin Algorithm**.
## 4. Replicate ServiceB to 2 instance and load balance among them with **Least Connection Algorithm**.

**Notes:**
1. All service with Nginx must be dockerized.
2. Docker compose should be used to spin up the project easily.

# Topic Learned through this task
1. Nginx configuration
2. Load balancing with Nginx
3. Reverse proxy setup in Nginx
