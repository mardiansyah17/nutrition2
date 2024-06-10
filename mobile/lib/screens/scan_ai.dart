import 'dart:convert';
import 'dart:io';

import 'package:camera/camera.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_gemini/flutter_gemini.dart';
import 'package:flutter_markdown/flutter_markdown.dart';
import 'package:get/route_manager.dart';
import 'package:image_picker/image_picker.dart';
import 'package:nutrition/constans/colors.dart';

class ScanAi extends StatefulWidget {
  const ScanAi({super.key});

  @override
  State<ScanAi> createState() => _ScanAiState();
}

class _ScanAiState extends State<ScanAi> {
  CameraController? _controller;
  bool isLoading = false;
  String? resultAi;
  @override
  void initState() {
    super.initState();
    _initializeCamera();
  }

  void _initializeCamera() async {
    CameraDescription description =
        await availableCameras().then((cameras) => cameras[0]);
    _controller = CameraController(description, ResolutionPreset.max);
    await _controller?.initialize();
    await _controller!.lockCaptureOrientation();
    if (!mounted) {
      return;
    }
    setState(() {});
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();

    _controller?.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_controller == null) {
      return const Center(
        child: CircularProgressIndicator(),
      );
    }

    return Scaffold(
      body: Column(
        // fit: StackFit.expand,
        children: [
          Expanded(
              child: AspectRatio(
                  aspectRatio: _controller!.value.aspectRatio,
                  child: CameraPreview(_controller!))),
          Container(
            color: Colors.grey.shade900.withOpacity(0.5),
            height: 120,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.spaceAround,
              children: [
                IconButton(
                  icon: Icon(Icons.image),
                  onPressed: _pickImage,
                  color: Colors.white,
                  iconSize: 45,
                ),
                isLoading
                    ? CircularProgressIndicator(
                        color: primary,
                      )
                    : IconButton(
                        icon: Icon(Icons.camera),
                        onPressed: _takePicture,
                        color: Colors.white,
                        iconSize: 55,
                      ),
                IconButton(
                  icon: Icon(Icons.flash_on),
                  onPressed: () {},
                  color: Colors.white,
                  iconSize: 45,
                ),
              ],
            ),
          ),
          // Visibility(
          //   visible: isLoading,
          //   child: Container(
          //     color: Colors.black.withOpacity(0.5),
          //     child: const Center(
          //         child: CircularProgressIndicator(
          //       color: primary,
          //     )),
          //   ),
          // ),
        ],
      ),
    );
  }

  void _pickImage() async {
    final ImagePicker picker = ImagePicker();
    final XFile? image = await picker.pickImage(source: ImageSource.gallery);
    print('\x1B[33m${image?.path}\x1B[0m');
    if (image?.path != null) {
      Get.toNamed('image-view', arguments: {"imagePath": image!.path});
    }
  }

  void _takePicture() async {
    setState(() {
      isLoading = true;
    });

    final XFile picture = await _controller!.takePicture();
    setState(() {
      isLoading = false;
    });
    Get.toNamed('image-view', arguments: {"imagePath": picture.path});
  }
}
