{{- define "giantmuseumweb.name" -}}
{{- .Chart.Name -}}
{{- end -}}

{{- define "giantmuseumweb.fullname" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name | trunc 63 | trimSuffix "-" -}}
{{- end -}}
