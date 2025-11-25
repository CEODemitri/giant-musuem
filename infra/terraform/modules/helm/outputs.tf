# output "instance_public_ip" {
#   value       = ""                                          # The actual value to be outputted
#   description = "The public IP address of the EC2 instance" # Description of what this output represents
# }
# default code when i selected output to create the file
output "release_name" {
  value = helm_release.app.name
}