resource "kubernetes_namespace" "app" {
  metadata {
    name = var.namespace
  }
}

output "namespace" {
  value = kubernetes_namespace.app.metadata[0].name
}