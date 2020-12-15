from locust import task, between
from locust.contrib.fasthttp import FastHttpUser

# (Only first time) Install @locust, open a terminal & run: pip3 install locust
# Open terminal & run: locust -f latam_pg.py
# Open address: http://localhost:8089/
# Insert the Number of total users to simulate
# Insert the Spawn rate (users spawned/second)
# Finally the HOST of the page that probably loads it, otherwise it is:  https://latam.pg.com

class WebsiteUser(FastHttpUser):

    # Config the host
    host = "https://latam.pg.com"
    wait_time = between(2, 50)

    # Config on FastHttpUser
    connection_timeout = 60.0
    insecure = True
    max_redirects = 5
    max_retries = 1
    network_timeout = 60.0

    # Index
    @task(1)
    def index(self):
        self.client.get("/")
        pass

    # Brands
    @task(2)
    def brands(self):
        self.client.get("/marcas-y-productos")
        pass

    # Baby
    @task(3)
    def baby_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-del-bebé")

    # Fabric
    @task(4)
    def fabric_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-de-la-ropa")

    # Family
    @task(5)
    def family_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-de-la-familia")

    # Feminine
    @task(6)
    def femenine_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-femenino")

    # Grooming
    @task(7)
    def grooming(self):
        self.client.get("/marcas-y-productos/#Cuidado-personal")

    # Hair
    @task(8)
    def hair_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-del-cabello")

    # Home
    @task(9)
    def home_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-en-el-hogar")

    # Oral
    @task(10)
    def oral_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-oral")

    # Personal health
    @task(11)
    def personal_health_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-de-la-salud-personal")

    # Sking & Personal
    @task(12)
    def personal_health_care(self):
        self.client.get("/marcas-y-productos/#Cuidado-personal-y-de-la-piel")