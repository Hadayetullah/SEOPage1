from django.urls import path
from .views import FileUploadView, FileListView

urlpatterns = [
   path('upload/', FileUploadView.as_view(), name='api_upload'),
   path('files/list/', FileListView.as_view(), name='api_files_list'),
]