module "kubernetes" {
  source    = "modules/helm"
  namespace =  "giantmuseumweb"
  chart_path = ""
  release = ""
}

module "helm_nextjs" {
  source    = "modules/helm"
  release   = "nextjs"
  namespace = module.kubernetes.namespace
  chart_path = "../../../chart"
}