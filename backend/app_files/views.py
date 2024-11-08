from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import FileUpload
from .serializers import FileUploadSerializer

class FileUploadView(APIView):
    def post(self, request):
        files = request.FILES.getlist('files')
       
        # Process each uploaded file
        for file in files:
            FileUpload.objects.create(file=file, name=file.name)
            
        # Get all files from the database
        all_files = FileUpload.objects.all()
        all_files_serializer = FileUploadSerializer(all_files, many=True, context={'request': request})

        return Response({"all_files": all_files_serializer.data}, status=status.HTTP_201_CREATED)
    


class FileListView(APIView):
    def get(self, request):
        all_files = FileUpload.objects.all()
        all_files_serializer = FileUploadSerializer(all_files, many=True, context={'request': request})

        return Response({"all_files": all_files_serializer.data}, status=status.HTTP_200_OK)

    
    
