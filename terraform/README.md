# Terraform

## Init folder

First, copy `staging.tfvars.sample` by removing `.sample` extension .

Then ask administrator to get variable inputs.

As we want to conserve Scaleway instance IP, we use instance IP ID.

By this way, we conserve the DNS redirection used for the staging.

## Terraform CLI

```bash
# init terraform folder
terraform init -var-file="staging.tfvars"
# plan terraform instance
terraform plan -var-file="staging.tfvars"
# create scaleway instance
terraform apply -var-file="staging.tfvars"
# destroy scaleway instance
terraform destroy -var-file="staging.tfvars"
```

### Documentation and literature
- [Your first Scaleway instance created with Terraform](https://www.scaleway.com/en/docs/deploy-your-first-terraform-infrastructure-on-scaleway/)
- [Variables usages](https://www.terraform.io/docs/language/values/variables.html#variable-definitions-tfvars-files)
