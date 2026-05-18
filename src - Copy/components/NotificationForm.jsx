import { useState } from "react";
import "./NotificationForm.css";

function NotificationForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "general",
    message: "",
    priority: "normal"
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    } else if (formData.title.length < 3) {
      newErrors.title = "Title must be at least 3 characters";
    } else if (formData.title.length > 50) {
      newErrors.title = "Title must be less than 50 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    } else if (formData.message.length > 500) {
      newErrors.message = "Message must be less than 500 characters";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    try {
      if (onSubmit) {
        await onSubmit(formData);
      }

      // Reset form
      setFormData({
        title: "",
        category: "general",
        message: "",
        priority: "normal"
      });
      setErrors({});
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      title: "",
      category: "general",
      message: "",
      priority: "normal"
    });
    setErrors({});
  };

  return (
    <div className="form-container">
      <div className="form-card">
        <div className="form-header">
          <h2>Create Notification</h2>
          <p className="form-subtitle">Send important updates to students</p>
        </div>

        <form onSubmit={handleSubmit} className="notification-form">
          {/* Title Field */}
          <div className="form-group">
            <label htmlFor="title" className="form-label">
              <span className="label-text">Title</span>
              <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter notification title"
              className={`form-input ${errors.title ? "input-error" : ""}`}
              maxLength="50"
              disabled={isSubmitting}
            />
            <div className="char-count">
              {formData.title.length}/50
            </div>
            {errors.title && (
              <span className="error-message">{errors.title}</span>
            )}
          </div>

          {/* Category & Priority Row */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="category" className="form-label">
                <span className="label-text">Category</span>
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="form-select"
                disabled={isSubmitting}
              >
                <option value="general">General</option>
                <option value="placement">Placement</option>
                <option value="academic">Academic</option>
                <option value="workshop">Workshop</option>
                <option value="event">Event</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="priority" className="form-label">
                <span className="label-text">Priority</span>
              </label>
              <select
                id="priority"
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                className="form-select"
                disabled={isSubmitting}
              >
                <option value="low">Low</option>
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="critical">Critical</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              <span className="label-text">Message</span>
              <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter notification message..."
              className={`form-textarea ${errors.message ? "input-error" : ""}`}
              rows="6"
              maxLength="500"
              disabled={isSubmitting}
            />
            <div className="char-count">
              {formData.message.length}/500
            </div>
            {errors.message && (
              <span className="error-message">{errors.message}</span>
            )}
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Notification"}
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleReset}
              disabled={isSubmitting}
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NotificationForm;
