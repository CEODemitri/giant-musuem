module "kubernetes" {
  source    = "./modules/helm"
  namespace =  "giantmuseumweb"
}

module "helm_nextjs" {
  source    = "./modules/helm"
  release   = "nextjs"
  namespace = module.kubernetes.namespace
  chart_path = "../../app/chart"
}