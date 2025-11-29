# output "instance_public_ip" {
#   value       = ""                                          # The actual value to be outputted
#   description = "The public IP address of the EC2 instance" # Description of what this output represents
# }

# useless 🤯

output "namespace" {
  value = kubernetes_namespace.app.metadata[0].name
}