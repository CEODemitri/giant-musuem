# variable "instance_type" {
#   type        = string                     # The type of the variable, in this case a string
#   default     = "t2.micro"                 # Default value for the variable
#   description = "The type of EC2 instance" # Description of what this variable represents
# }
# default code when i selected variable  to create the file
variable "release" {
  type = string
}

variable "namespace" {
  type = string
}

variable "chart_path" {
  type = string
}

variable "image_repository" {
  type = string
  default = "giantmuseumweb"
}

variable "image_tag" {
  type = string
  default = "latest"
}