terraform {
  required_providers {
    scaleway = {
      source = "scaleway/scaleway"
    }
  }
  required_version = ">= 0.13"
}

provider "scaleway" {
  access_key      = var.access_key
  secret_key      = var.secret_key
  project_id	  = var.project_id
  zone            = "fr-par-2"
  region          = "fr-par"
}

resource "scaleway_instance_ip" "public_ip" {}

resource "scaleway_instance_server" "cheatty-instance" {
  type  = "DEV1-S"
  image = "debian_buster"
  name = "cheatty-staging"
  tags = [ "terraform instance", "cheatty-staging" ]
  ip_id = var.ip_id
}

output "cheatty-staging" {
  value = scaleway_instance_server.cheatty-instance
}
