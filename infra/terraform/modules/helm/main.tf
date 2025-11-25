resource "helm_release" "app" {
  name = var.release
  namespace = var.namespace

  chart = var.chart_path

  set {
    name = "image.repository"
    value = var.image_repository
  }

  set {
    name = "image.tag"
    value = var.image_tag
  }
}