module "kubernetes" {
  source    = "./modules/kubernetes"
  namespace =  "giantmuseumweb"
}

module "helm_nextjs" {
  source    = "./modules/helm"
  release   = "nextjs"
  namespace = module.kubernetes.namespace
  chart_path = "../../chart"
}


# .A Helm chart is a packaged, versioned blueprint for deploying applications to Kubernetes.
# Think of it as the Kubernetes equivalent of:
#
# a Docker image for containers
#
# a Terraform module for infrastructure
#
# an npm package for JavaScript
#
# It lets you define everything your app needs to run on Kubernetes — once — and reuse it anywhere.