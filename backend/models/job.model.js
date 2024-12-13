import mongoose from 'mongoose';

const JobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxlength: 150
  },
  description: {
    type: String,
    required: true,
    trim: true,
    maxlength: 5000
  },
  company: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  location: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  workType: {
    type: String,
    enum: ['Full-time', 'Part-time', 'Contract', 'Remote', 'Internship'],
    required: true
  },
  salary: {
    min: {
      type: Number,
      min: 0
    },
    max: {
      type: Number,
      min: 0
    },
    currency: {
      type: String,
      default: 'USD'
    }
  },
  status: {
    type: String,
    enum: ['Draft', 'Active', 'Closed', 'Filled'],
    default: 'Draft'
  },
  skills: [{
    type: String,
    trim: true,
    maxlength: 50
  }],
  applicationDeadline: {
    type: Date,
    validate: {
      validator: function (v) {
        return v > Date.now();
      },
      message: 'Application deadline must be in the future'
    }
  },
  experience: {
    min: {
      type: Number,
      min: 0,
      default: 0
    },
    max: {
      type: Number,
      min: 0
    }
  },
  educationLevel: {
    type: String,
    enum: ['Any', 'High School', 'Bachelor', 'Master', 'PhD']
  },
  postedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  applications: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Application'
  }],
  category: {
    type: String,
    enum: ['Engineering', 'Marketing', 'Sales', 'Finance', 'Human Resources', 'IT', 'Customer Service'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

// Add text index for search functionality
JobSchema.index({ title: 'text', description: 'text', skills: 'text' });

const jobModel = mongoose.model('Job', JobSchema);

export default jobModel